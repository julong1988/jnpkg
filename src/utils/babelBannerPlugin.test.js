import { transform } from '@babel/core';
import babelBannerPlugin from './babelBannerPlugin';

describe('babelBannerPlugin', () => {
  test('script add comment to header => hello', () => {
    // Arrange
    const source = 'var a = 1;';
    const options = { plugins: [[babelBannerPlugin, { banner: 'hello' }]] };

    // Acr
    const { code } = transform(source, options);

    // Assert
    expect(code).toBe('/*hello*/\nvar a = 1;');
  });
});
