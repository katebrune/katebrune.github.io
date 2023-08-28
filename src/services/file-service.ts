import { Service } from 'typedi'
import fs from 'node:fs'
import path from 'node:path'

@Service()
export class FileService {
  constructor() {}

  /**
   * helper function to get all files from a directory
   * @param directory
   * @returns
   */
  getAllFilesInDirectory(directory: string): path.ParsedPath[] {
    const filenames = fs.readdirSync(directory)
    return filenames.map((filename: string) => path.parse(filename))
  }

  /**
   * helper function to get all files of a certain file type from a directory
   * @param directory the directory to search for files
   * @param extension the extension to search for files
   * @returns ParsedPath[]
   */
  getAllFilesOfTypeInDirectory(
    directory: string,
    extension: string,
  ): path.ParsedPath[] {
    const files = this.getAllFilesInDirectory(directory)
    return files.filter((file) => file.ext === extension)
  }
}
