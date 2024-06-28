export const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50 
    },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * .15,
            ease: 'easeOut'
        }
    })
};