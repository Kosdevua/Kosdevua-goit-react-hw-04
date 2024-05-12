import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={s.error_message_wrapper}>
      <p className={s.error_message}>
        Whoops, something went wrong! Please try reloading this page!
      </p>
    </div>
  );
};

export default ErrorMessage;
