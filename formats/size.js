import { ClassAttributor, Scope, StyleAttributor } from 'parchment';

const SizeClass = new ClassAttributor('size', 'ql-size', {
  scope: Scope.INLINE,
  whitelist: ['12', '16', '18', '24', '32'],
});
const SizeStyle = new StyleAttributor('size', 'font-size', {
  scope: Scope.INLINE,
  whitelist: ['12px', '16px', '18px', '24px', '32px'],
});

export { SizeClass, SizeStyle };
