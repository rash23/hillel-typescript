export interface IObserver {
  update(observable: IObservable): void;
}

export interface IObservable {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(): void;
}
