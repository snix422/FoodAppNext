const SummaryStatistic = ({ kcal, carbohydrates, protein, fat }: { kcal: number, carbohydrates: number, protein: number, fat: number }) => {
    return (
        <div className="w-[80%] max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Podsumowanie</h4>
            <div className="flex flex-wrap gap-6 justify-center">
                <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md w-[150px]">
                    <h5 className="text-lg font-medium text-gray-700 mb-2">Kcal</h5>
                    <span className="text-2xl font-bold text-gray-900">{kcal}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md w-[150px]">
                    <h5 className="text-lg font-medium text-gray-700 mb-2">Węglowodany</h5>
                    <span className="text-2xl font-bold text-gray-900">{carbohydrates}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md w-[150px]">
                    <h5 className="text-lg font-medium text-gray-700 mb-2">Białko</h5>
                    <span className="text-2xl font-bold text-gray-900">{protein}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md w-[150px]">
                    <h5 className="text-lg font-medium text-gray-700 mb-2">Tłuszcz</h5>
                    <span className="text-2xl font-bold text-gray-900">{fat}</span>
                </div>
            </div>
        </div>
    );
};
export default SummaryStatistic