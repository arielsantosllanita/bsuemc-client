import useDarkMode from '@hooks/useDarkMode';
import Loader from 'react-loader-spinner';

export default function Spinner() {
  const [darkMode] = useDarkMode();

  return (
    <div className="h-screen flex justify-center overflow-y-auto">
      <Loader
        visible={true}
        type="Bars"
        color={darkMode ? "#FFFFFF" : "#000000"}
        height={90}
        width={90}
        className="self-center"
      />
    </div>
  )
}
