interface TitleProps {
  title: string;
  className?: string;
}
export default function Title(props: TitleProps) {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <h2 className={`text-2xl font-bold  text-gray-800 ${props.className}`}>
        {props.title}
      </h2>
    </div>
  );
}
