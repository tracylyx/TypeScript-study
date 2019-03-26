# TypeScript-study
codes and notes about studying TS.

### typescript
- 结构性类型系统。当比较两种不同的类型时，不在乎它们从何处来，如果所有成员的类型都是兼容的，就认为它们的类型是兼容的
- 然而，当我们比较带有 private或 protected成员的类型的时候，情况就不同了。 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。
