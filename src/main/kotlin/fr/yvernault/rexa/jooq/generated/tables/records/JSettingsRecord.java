/*
 * This file is generated by jOOQ.
 */
package fr.yvernault.rexa.jooq.generated.tables.records;


import fr.yvernault.rexa.jooq.generated.tables.JSettings;

import org.jooq.Field;
import org.jooq.Record1;
import org.jooq.Record4;
import org.jooq.Row4;
import org.jooq.impl.UpdatableRecordImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class JSettingsRecord extends UpdatableRecordImpl<JSettingsRecord> implements Record4<Long, String, String, String> {

    private static final long serialVersionUID = -463596923;

    /**
     * Setter for <code>rexa.settings.id</code>.
     */
    public void setId(Long value) {
        set(0, value);
    }

    /**
     * Getter for <code>rexa.settings.id</code>.
     */
    public Long getId() {
        return (Long) get(0);
    }

    /**
     * Setter for <code>rexa.settings.xnat_username</code>.
     */
    public void setXnatUsername(String value) {
        set(1, value);
    }

    /**
     * Getter for <code>rexa.settings.xnat_username</code>.
     */
    public String getXnatUsername() {
        return (String) get(1);
    }

    /**
     * Setter for <code>rexa.settings.xnat_password</code>.
     */
    public void setXnatPassword(String value) {
        set(2, value);
    }

    /**
     * Getter for <code>rexa.settings.xnat_password</code>.
     */
    public String getXnatPassword() {
        return (String) get(2);
    }

    /**
     * Setter for <code>rexa.settings.xnat_url</code>.
     */
    public void setXnatUrl(String value) {
        set(3, value);
    }

    /**
     * Getter for <code>rexa.settings.xnat_url</code>.
     */
    public String getXnatUrl() {
        return (String) get(3);
    }

    // -------------------------------------------------------------------------
    // Primary key information
    // -------------------------------------------------------------------------

    @Override
    public Record1<Long> key() {
        return (Record1) super.key();
    }

    // -------------------------------------------------------------------------
    // Record4 type implementation
    // -------------------------------------------------------------------------

    @Override
    public Row4<Long, String, String, String> fieldsRow() {
        return (Row4) super.fieldsRow();
    }

    @Override
    public Row4<Long, String, String, String> valuesRow() {
        return (Row4) super.valuesRow();
    }

    @Override
    public Field<Long> field1() {
        return JSettings.SETTINGS.ID;
    }

    @Override
    public Field<String> field2() {
        return JSettings.SETTINGS.XNAT_USERNAME;
    }

    @Override
    public Field<String> field3() {
        return JSettings.SETTINGS.XNAT_PASSWORD;
    }

    @Override
    public Field<String> field4() {
        return JSettings.SETTINGS.XNAT_URL;
    }

    @Override
    public Long component1() {
        return getId();
    }

    @Override
    public String component2() {
        return getXnatUsername();
    }

    @Override
    public String component3() {
        return getXnatPassword();
    }

    @Override
    public String component4() {
        return getXnatUrl();
    }

    @Override
    public Long value1() {
        return getId();
    }

    @Override
    public String value2() {
        return getXnatUsername();
    }

    @Override
    public String value3() {
        return getXnatPassword();
    }

    @Override
    public String value4() {
        return getXnatUrl();
    }

    @Override
    public JSettingsRecord value1(Long value) {
        setId(value);
        return this;
    }

    @Override
    public JSettingsRecord value2(String value) {
        setXnatUsername(value);
        return this;
    }

    @Override
    public JSettingsRecord value3(String value) {
        setXnatPassword(value);
        return this;
    }

    @Override
    public JSettingsRecord value4(String value) {
        setXnatUrl(value);
        return this;
    }

    @Override
    public JSettingsRecord values(Long value1, String value2, String value3, String value4) {
        value1(value1);
        value2(value2);
        value3(value3);
        value4(value4);
        return this;
    }

    // -------------------------------------------------------------------------
    // Constructors
    // -------------------------------------------------------------------------

    /**
     * Create a detached JSettingsRecord
     */
    public JSettingsRecord() {
        super(JSettings.SETTINGS);
    }

    /**
     * Create a detached, initialised JSettingsRecord
     */
    public JSettingsRecord(Long id, String xnatUsername, String xnatPassword, String xnatUrl) {
        super(JSettings.SETTINGS);

        set(0, id);
        set(1, xnatUsername);
        set(2, xnatPassword);
        set(3, xnatUrl);
    }
}