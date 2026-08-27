// Every screen in the app, and what params it expects.
// `undefined` means the screen takes no params.

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: { productId: string };
};
