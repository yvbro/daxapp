/*
 * This file is generated by jOOQ.
 */
package fr.yvernault.rexa.jooq.generated;


import org.jooq.Sequence;
import org.jooq.impl.Internal;


/**
 * Convenience access to all sequences in rexa
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Sequences {

    /**
     * The sequence <code>rexa.settings_id_seq</code>
     */
    public static final Sequence<Long> SETTINGS_ID_SEQ = Internal.createSequence("settings_id_seq", JRexa.REXA, org.jooq.impl.SQLDataType.BIGINT.nullable(false), null, null, null, null, false, null);
}