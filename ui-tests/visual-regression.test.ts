import path from 'path'

import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

const getMatchOptions = ({ context: { fileName } }: { context: any }) => {
  const snapshotPath = path.join(
    'ui-tests',
    'snapshots',
    path.dirname(fileName),
  )
  return { customSnapshotsDir: snapshotPath }
}

const beforeScreenshot = async (
  page: any,
  { context: { parameters } }: any,
) => {
  const viewport = parameters.viewport
  if (viewport) {
    if (viewport.defaultViewport !== 'responsive') {
      const defaultViewport = viewport.viewports[viewport.defaultViewport]
      await page.setViewport({
        width: parseInt(defaultViewport.styles.width, 10),
        height: parseInt(defaultViewport.styles.height, 10),
      })
    } else {
      await page.setViewport({ width: 1366, height: 784 })
    }
  }
  await page.waitForTimeout()
}

initStoryshots({
  test: imageSnapshot({
    getMatchOptions,
    beforeScreenshot,
  }),
  // dont run snapshot test on FruitSaladLoader, PageUnderConstruction component
  storyKindRegex: /^((?!.*?FruitSaladLoader)(?!.*?PageUnderConstruction).)*$/,
})
