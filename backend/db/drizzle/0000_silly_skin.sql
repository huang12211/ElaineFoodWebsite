CREATE TABLE `ingredients` (
	`ingr` text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE `mesurementUnits` (
	`meas_units` text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE `recipe_ingredient_measUnit` (
	`id` integer PRIMARY KEY NOT NULL,
	`recipe_id` text,
	`component` text,
	`amount` text,
	`measUnit_id` text,
	`ingredient_id` text,
	`min_amount` text,
	FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`name`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`measUnit_id`) REFERENCES `mesurementUnits`(`meas_units`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients`(`ingr`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `recipes` (
	`name` text PRIMARY KEY NOT NULL,
	`image_src` text NOT NULL,
	`video` text NOT NULL,
	`avg_rating` integer,
	`numRatings` integer,
	`directions` text,
	`tags` text,
	`initialServing` integer,
	`minServing` integer,
	`maxServing` integer,
	`servingIncrements` integer
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`text_modifiers` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`int_modifiers` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users_recipe_reviews` (
	`user_id` integer,
	`recipe_name` text,
	`bookmarked` integer DEFAULT false NOT NULL,
	`rating` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`recipe_name`) REFERENCES `recipes`(`name`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);