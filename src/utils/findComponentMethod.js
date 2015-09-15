/**
 * Created by mikhail on 15.09.15.
 */
export default function (component, method) {
  let filteredMethod = component[method];
  let decoratedComponent = (component.DecoratedComponent || component.WrappedComponent);

  if (!filteredMethod && decoratedComponent) {
    filteredMethod = decoratedComponent[method];

    if (!filteredMethod) {
      filteredMethod = decoratedComponent.DecoratedComponent && decoratedComponent.DecoratedComponent[method];
    }
  }

  return filteredMethod;
}
