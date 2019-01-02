package com.future.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)

public class Transaction {
    @Id
    private String id;
    private Date createdAt = new Date();
    private String status;
    private List <TransData> transcData;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<TransData> getTranscData() {
        return transcData;
    }

    public void setTranscData(List<TransData> transcData) {
        this.transcData = transcData;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}