/*
 * This file is generated by jOOQ.
 */
package fr.yvernault.rexa.jooq.generated;


import fr.yvernault.rexa.jooq.generated.tables.JSchemaVersion;
import fr.yvernault.rexa.jooq.generated.tables.JUser;

import java.util.Arrays;
import java.util.List;

import org.jooq.Catalog;
import org.jooq.Table;
import org.jooq.impl.SchemaImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class JRexa extends SchemaImpl {

    private static final long serialVersionUID = -538852946;

    /**
     * The reference instance of <code>rexa</code>
     */
    public static final JRexa REXA = new JRexa();

    /**
     * The table <code>rexa.schema_version</code>.
     */
    public final JSchemaVersion SCHEMA_VERSION = JSchemaVersion.SCHEMA_VERSION;

    /**
     * The table <code>rexa.user</code>.
     */
    public final JUser USER = JUser.USER;

    /**
     * No further instances allowed
     */
    private JRexa() {
        super("rexa", null);
    }


    @Override
    public Catalog getCatalog() {
        return DefaultCatalog.DEFAULT_CATALOG;
    }

    @Override
    public final List<Table<?>> getTables() {
        return Arrays.<Table<?>>asList(
            JSchemaVersion.SCHEMA_VERSION,
            JUser.USER);
    }
}
