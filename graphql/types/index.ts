import { extendType } from 'nexus';

export const testingTest = extendType({
  type: 'Query',
  definition(t) {
    t.field('test', {
      type: 'String',
      resolve: () => 'test',
    });
  },
});
