interface NodeModule {
    hot?: {
      accept(dependencies?: string | string[], callback?: (updatedDependencies?: any) => void): void;
    };
  }
  
