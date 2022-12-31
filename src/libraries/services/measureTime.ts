
class MeasureTime {
    startTime = new Date();
    endTime = new Date();
    timeDiff: number = 0

    startTimer() {
        this.startTime = new Date();
    }

    endTimer() {
        this.endTime = new Date();
        this.timeDiff = this.endTime.valueOf() - this.startTime.valueOf();

        // strip the ms
        this.timeDiff /= 1000;

        // get seconds
        this.timeDiff = Math.round(this.timeDiff);
    }
}

export default new MeasureTime();