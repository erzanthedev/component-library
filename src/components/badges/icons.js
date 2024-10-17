import {
  FaCircleCheck,
  FaCircleXmark,
  FaTriangleExclamation,
  FaCircleInfo,
} from "react-icons/fa6";

const icons = {
  success: <FaCircleCheck className="banner-icon-success" />,
  warning: <FaTriangleExclamation className="banner-icon-warning" />,
  error: <FaCircleXmark className="banner-icon-error" />,
  neutral: <FaCircleInfo className="banner-icon-neutral" />,
};

export default icons;
