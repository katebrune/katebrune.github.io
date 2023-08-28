import { Service } from 'typedi'
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { FileService } from '@/services/file-service'

export type PostMetadata = {
  metadata: any
}

export type PostData = PostMetadata & { content: any }

@Service()
export class MdxService {
  private postsDirectory: string
  private mdxFileExtension: string
  private fileService: FileService

  constructor(private fs: FileService) {
    this.postsDirectory = path.join(process.cwd(), 'src', 'content')
    this.mdxFileExtension = '.mdx'
    this.fileService = fs
  }

  getAllPostNames(): string[] {
    const mdxFiles = this.fileService.getAllFilesOfTypeInDirectory(
      this.postsDirectory,
      this.mdxFileExtension,
    )
    return mdxFiles.map((file) => file.name)
  }

  getAllPostsMetadata(): PostMetadata[] {
    const mdxFiles = this.fileService.getAllFilesInDirectory(
      this.postsDirectory,
    )
    return mdxFiles.map((file) => {
      const postData = this.getPostData(file.name)
      return { metadata: postData.metadata }
    })
  }

  getPostData(id: string): PostData {
    const fullPath = path.join(this.postsDirectory, id + this.mdxFileExtension)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return {
      metadata: {
        id: id,
        ...data,
      },
      content: content,
    }
  }
}
