interface TitleProps {
    title: string
}

export default function Title({ title }: TitleProps) {
  return <h2 className="pb-2 border-bottom">{title}</h2>;
}
