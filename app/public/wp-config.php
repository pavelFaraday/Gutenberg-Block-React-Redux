<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'local');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', 'root');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',          'H/8wSUo+a0osdDXppMJo{I4?R,iaw75^2[hncvvY<>5j*2gddvC/*-iPjv9Zd|0U');
define('SECURE_AUTH_KEY',   '$.<c4$!JP-)[x;;V)b2Vntd=,xj%*`&U6r560f5$mUlcJ>MGrP{Wm{j~5u/!.zF[');
define('LOGGED_IN_KEY',     'Y,v/16nUFhe`g#?C!$ky?oANGJ)qCGAI{xwi:SN#0s#YJ*W3`z |dcM20.2-FLzS');
define('NONCE_KEY',         '91:V;Q^uv/y(-9>,JLI5xYFTw*ZUMABrf^TScc#B7+3$}YV7[W!1/8TEn+c,/2E6');
define('AUTH_SALT',         'j^6[`m4Xh9raoTCLk+!AKJe(!l#3^6yt=F_M, VqH8jE.noDkW<(sE3~[s&Y*Z!v');
define('SECURE_AUTH_SALT',  'Y  SN8DQELf(|cmY$C#qB;^H4N{|n8r^<?^sMr?-?UHQu(|~3`/(aC=lJRd-C%#5');
define('LOGGED_IN_SALT',    'hU6Yu4|C)QmAF`P#3lSdh>Ju=5dnjL:)HoJoH]]x;GQ>vJf_lcN_{4%JL,}Ay1Co');
define('NONCE_SALT',        '%:-ZL;p];S]yx4ZS%{y#Hf3&,V-vu1F3y?wVMxzSYIDPE]}z5EQlyU-~$QJ>oNg@');
define('WP_CACHE_KEY_SALT', '1.Z<]p<)fyyM!v?X?&4G,g?w/Nto?$J,;{eCOK$]/vn^$i6Pj/jUuhUL6V[!_@aC');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if (! defined('WP_DEBUG')) {
	define('WP_DEBUG', true);
}

define('WP_ENVIRONMENT_TYPE', 'local');
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (! defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
