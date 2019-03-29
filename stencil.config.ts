import { Config } from '@stencil/core';
import { less } from '@stencil/less';
import { postcss } from '@stencil/postcss';
import * as autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'wowo',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    less(),
    postcss()
  ],
  globalStyle: 'src/globals/variable.less',
  devServer: {
    openBrowser: false
  }
};