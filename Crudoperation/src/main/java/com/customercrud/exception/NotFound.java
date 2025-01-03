package com.customercrud.exception;

public class NotFound {
    public int status;
    public String error;
    public long timeStamp;

    public NotFound(int status, String error, long timeStamp) {
        this.status = status;
        this.error = error;
        this.timeStamp = timeStamp;
    }

    public NotFound() {
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public long getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(long timeStamp) {
        this.timeStamp = timeStamp;
    }
}
