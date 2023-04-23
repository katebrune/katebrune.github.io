import React, { FunctionComponent } from 'react'
import { ConstructionCraneIcon } from '../../components/data-display/Icon/ConstructionCraneIcon'
import { GearIcon } from '../../components/data-display/Icon/GearIcon'
import { HammerIcon } from '../../components/data-display/Icon/HammerIcon'
import styles from './PageUnderConstruction.module.css'

export interface PageUnderConstructionProps {}

export const PageUnderConstruction: FunctionComponent<PageUnderConstructionProps> =
  () => {
    return (
      <div className={styles.Container}>
        <div className={styles.IconContainer}>
          <GearIcon
            className={styles.Gear}
            data-testid="pageUnderConstruction_gearIcon"
          />
          <ConstructionCraneIcon
            className={styles.ConstructionCrane}
            data-testid="pageUnderConstruction_craneIcon"
          />
          <HammerIcon
            className={styles.Hammer}
            data-testid="pageUnderConstruction_hammerIcon"
          />
        </div>
        <div className="text-center">
          <p
            className={styles.Description}
            data-testid="pageUnderConstruction_description"
          >
            This site is under construction
          </p>
          <p
            className={styles.SubDescription}
            data-testid="pageUnderConstruction_subDescription"
          >
            Come back soon!
          </p>
        </div>
      </div>
    )
  }
