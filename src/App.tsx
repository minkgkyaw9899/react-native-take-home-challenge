import React, {FC} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from 'navigation/rootStackNavigator';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
