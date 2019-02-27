package com.stackroute.domain;

import lombok.Builder;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="counters")
@Builder
/*counter entity class for storing sequence value*/
public class Counters {

    @Id
    public String _id;
    public int seq;

    public Counters(String _id, int seq) {
        this._id = _id;
        this.seq = seq;
    }
}
