export interface IFlag {
  name: string;
  description: string;
  short: string;
}

export interface ICommand {
  name: string;
  description: string;
  flags?: Array<IFlag>;
  output?: JSX.Element;
  func?: (props?: any, command?: string) => any;
}
