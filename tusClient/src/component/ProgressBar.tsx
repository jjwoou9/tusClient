const ProgressBar = (progress: { status: number }) => {
    return (
      <div className="w-full">
        <div className="bg-gray-300 rounded-full">
          <div
          className="bg-green-500 text-xs leading-none py-1 text-center text-white rounded-full"
          style={{ width: `${progress.status}%` }}
          >
            {progress.status}%
          </div>
        </div>
      </div>
    )
  }

export default ProgressBar