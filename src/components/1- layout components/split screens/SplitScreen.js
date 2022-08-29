

export const SplitScreen = (
    //* Left and Right, are in capital letters because we are passing components to the SplitScreen components
    {
    left : Left,
    right : Right,
    leftWeight = 'full',
    rightWeight ='full',
    names 
}) => {
    return(
        <div className='flex'>
            <div className={`basis-${leftWeight} border`}>
                <Left name={names.leftName}/>
            </div>
            <div className={`basis-${rightWeight} border`}>
                <Right name={names.rightName}/>
            </div>
        </div>
    )
}


