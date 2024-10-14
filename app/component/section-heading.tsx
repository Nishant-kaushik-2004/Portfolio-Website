type sectionHeadingProps = {
  children: React.ReactNode;
};

function SectionHeading({ children }: sectionHeadingProps) {
  return <h2 className="text-3xl capitalize font-medium mb-8 text-center">{children}</h2>;
}

export default SectionHeading;
