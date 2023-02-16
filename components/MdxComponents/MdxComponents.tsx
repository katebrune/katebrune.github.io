import React, { FunctionComponent } from 'react'
import styles from './MdxComponents.module.css'

export interface Heading1Props
  extends React.HTMLAttributes<HTMLHeadingElement> {}
const Heading1: FunctionComponent<Heading1Props> = (props) => (
  <h1 {...props} className={styles.Heading1} />
)

export interface Heading2Props
  extends React.HTMLAttributes<HTMLHeadingElement> {}
const Heading2: FunctionComponent<Heading2Props> = (props) => (
  <h2 {...props} className={styles.Heading2} />
)

export interface Heading3Props
  extends React.HTMLAttributes<HTMLHeadingElement> {}
const Heading3: FunctionComponent<Heading3Props> = (props) => (
  <h3 {...props} className={styles.Heading3} />
)

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {}
const Text: FunctionComponent<TextProps> = (props) => (
  <p {...props} className={styles.Text} />
)

export interface PreProps extends React.HTMLAttributes<HTMLPreElement> {}
const Pre: FunctionComponent<PreProps> = (props) => (
  <pre {...props} className={styles.Pre} />
)

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {}
const Code: FunctionComponent<CodeProps> = (props) => (
  <code {...props} className={styles.Code} />
)

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {}
const Image: FunctionComponent<ImageProps> = (props) => (
  <img {...props} className={styles.Image} />
)

const MdxComponents = {
  Heading1: Heading1,
  Heading2: Heading2,
  Heading3: Heading3,
  Text: Text,
  Pre: Pre,
  Code: Code,
  Image: Image,
}

export default MdxComponents
