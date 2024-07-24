# shadcn-expo-react-boilerplate
Proof of concept for sharing shadcn based UI between and Expo and React.

## Tips
* `pnpm` does not work well with Expo, unless you set `.npmrc` to `node-linker=hoisted` - refer to this [GitHub issue](https://github.com/expo/expo/issues/22413).

## Conclusion
Enabling sharable components between Expo and Web requires creating a compatable layer of components:

### Compat issues:
* `View` to `div`, `section`
* `Text` to `h1`, `h2`, `h3`... `p` 
* `Text` link to `a`
* `Image` to `img`

There are also different navigational UX actions. It's probably better to just create a new ui from scratch.
