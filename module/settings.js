const moduleID = 'wfrp4e-fx';

Hooks.once('init', () => {

game.settings.register(moduleID, 'light&vision', {
	name: game.i18n.localize("settings.light&vision.name"),
	hint: game.i18n.localize("settings.light&vision.hint"),
        scope: 'world',
        config: true,
        type: Boolean,
        default: true
    });
})
