import IconEllipsis from './icon-ellipsis.svg?react';

export default function TimeCard({ title, prevTitle, bg, icon, timeframe }) {    
    return (
        <div>
            <div className={`rounded-t-2xl h-14 relative -z-10 overflow-hidden lg:rounded-t-3xl lg:h-16 ${bg}`}>
                <img className="ml-auto mr-4 -translate-y-1" src={icon} alt={title}/>
            </div>
            <div className="rounded-2xl bg-dark-blue text-white -mt-4 px-6 pb-9 pt-8 lg:-mt-5 lg:px-8 lg:py-8 lg:rounded-3xl hover:bg-dark-purple hover:cursor-pointer">
                <div className="flex items-center justify-between mb-2 lg:mb-6">
                    <h2 className="font-medium text-lg">{title}</h2>
                    <IconEllipsis className="text-pale-blue hover:cursor-pointer hover:text-white" />
                </div>
                <div className="flex justify-between items-center gap-3 lg:flex-col lg:items-start">
                    <p className="text-4xl font-light">{timeframe.current}hrs</p>
                    <p className="text-pale-blue">Last {prevTitle} - {timeframe.previous}hrs</p>
                </div>
            </div>
        </div>
    );
}