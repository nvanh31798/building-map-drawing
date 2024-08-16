
interface AppContainerProps {
  children: string | JSX.Element | JSX.Element[];
}

export const AppContainer = ({ children }: AppContainerProps) => {
  return <div className="flex p-5">{children}</div>;
};