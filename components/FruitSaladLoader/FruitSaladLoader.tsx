import { FunctionComponent } from 'react'
import Icon from '../Icon'
import styles from './FruitSaladLoader.module.css'

export interface FruitSaladLoaderProps {}

export const FruitSaladLoader: FunctionComponent<FruitSaladLoaderProps> =
  ({}) => {
    return (
      <div className={styles.Container}>
        <Icon.Cherry
          className={styles.Cherry}
          data-testid="fruitsaladloader_icon-cherry"
        />
        <Icon.Lemon
          className={styles.Lemon}
          data-testid="fruitsaladloader_icon-lemon"
        />
        <Icon.Blueberry
          className={styles.Blueberry}
          data-testid="fruitsaladloader_icon-blueberry"
        />
      </div>
    )
  }
