import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import styles from "@/styles/styles";

type TSquareBox = PropsWithChildren<{
  className?: string;
}>;

const SquareBox = ({ children, className = "" }: TSquareBox) => {
  return (
    <div
      className={cn(
        "relative bg-white bg-opacity-10 rounded-2xl py-5 overflow-hidden ",
        styles.paddingHelper,
        className
      )}
    >
      <div className={cn(styles.squareAbsolute, styles.squareBackground)}></div>
      <div>{children}</div>
    </div>
  );
};
export default SquareBox;
