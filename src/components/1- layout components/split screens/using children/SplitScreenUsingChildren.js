

export const SplitScreenUsingChildren = (
    //* Left and Right, are in capital letters because we are passing components to the SplitScreen components
    {
    children,
    leftWeight = 'full',
    rightWeight ='full'
}) => {
    const [left, right] = children
    console.log(`basis-${rightWeight} border`)
    return(
        <div className='flex'>
            <div className={`basis-${leftWeight} border`}>
                {left}
            </div>
            <div className={`basis-${rightWeight} border`}>
                {right}
            </div>
        </div>
    )
}
