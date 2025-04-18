interface ButtonProps {
  className?: string;
  text: string;
  id?: string;
}

const Button = ({ className, text, id }: ButtonProps) => {
  return (
    <a id={id} className={`cta-wrapper ${className ?? ""}`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
