import { ComponentProps } from "react";
import { AvataContainer, AvatarFallback, AvatarImage } from "./styles";
import { User } from "phosphor-react";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export const Avatar = (props: AvatarProps) => {
  return (
    <AvataContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvataContainer>
  );
};
