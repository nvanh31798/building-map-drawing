
interface AppContainerProps {
  children: string | JSX.Element | JSX.Element[];
}

export const AppContainer = ({ children }: AppContainerProps) => {
  return <div className="flex mt-10 justify-center">{children}</div>;
};
