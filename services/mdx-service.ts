import { Service } from 'typedi'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { FileService } from './file-service'

export type PostMetadata = {
  metadata: any
}

export type PostData = PostMetadata & { content: any }

@Service()
export class MdxService {
  private postsDirectory: string
  private mdxFileExtension: string
  constructor(private fileService: FileService) {
    this.postsDirectory = path.join(process.cwd(), 'content')
    this.mdxFileExtension = '.mdx'
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
