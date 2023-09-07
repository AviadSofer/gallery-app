import { useEffect, RefObject } from "react";

interface Props {
  elementRef: RefObject<HTMLElement>;
  show: boolean;
  setShow: (show: boolean) => void;
}

const ClickOutsideHandler: React.FC<Props> = ({
  show,
  setShow,
  elementRef,
}) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!show) return;

      const target = event.target as Node;
      const { current } = elementRef;

      if (!current) return;
      if (current.contains(target)) return;

      setShow(false);
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [show, elementRef, setShow]);

  return null;
};

export default ClickOutsideHandler;
