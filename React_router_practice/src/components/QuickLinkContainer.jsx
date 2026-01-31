import QuickLink from "./QuickLink";

function QuickLinkContainer({ flexState, gap, screen }) {
    return (
        <div className={`flex ${flexState} gap-${gap}`}>
            <QuickLink pageName="Home" screen={screen} />
            <QuickLink pageName="About" screen={screen} />
            <QuickLink pageName="Contact" screen={screen} />
            <QuickLink pageName="Github" screen={screen} />
        </div>
    )
}

export default QuickLinkContainer;