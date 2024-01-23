interface TitleProps {
  title: string;
  className?: string;
  color?: string;
}
export default function Title(props: TitleProps) {
  return (
    <div className="mb-2 w-full">
      <p
        className={`text-2xl lg:text-3xl text-center font-semibold ${
          props.className
        } ${props.color ?? "text-primary"}`}
      >
        {props.title}
      </p>
    </div>
  );
}
