import { Redirect } from "expo-router";

const Index = () => {
  const isAuth = false;

  if (isAuth) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  return <Redirect href="/(auth)/welcome" />;
};

export default Index;
