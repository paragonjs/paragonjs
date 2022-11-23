import * as React from "react";
import "../Carousel/index.scss";

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
    handleClick?: (event: React.SyntheticEvent<HTMLDivElement>) => void;
    ref?: React.ForwardedRef<HTMLDivElement>;
}

const CarouselItem: React.ForwardRefExoticComponent<CarouselItemProps> = React.forwardRef(
    (props: CarouselItemProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        const { handleClick, ...rest } = props;
        CarouselItem.displayName = "CarouselItem";

        const classNames = React.useMemo(
            () => ["p1-carousel-item", props.className].join(" "),
            [props.className]
        );

        return (
            <div
                ref={ref}
                {...rest}
                className={classNames}
                onClick={handleClick}
            />
        );
    }
);

export default CarouselItem;
