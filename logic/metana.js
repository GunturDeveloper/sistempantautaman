/* MetanaJs By GunturDeveloper */
const error_0000 = "Kesalahan 0000\nModel akar tidak dapat dimuat";
const error_0001 = "Kesalahan 0001\nFungsi tidak terdefinisikan";

export function show(v) {
    if (!v) {
        console.log(error_0001);
    } else {
        console.log(v);
    }
}

const Metana = {
    activityLayout(id, content) {
        const target = document.getElementById(id);
        if (!target) {
            console.error(error_0000);
            return;
        }

        if (typeof content !== "function") {
            console.error(error_0001);
            return;
        }

        try {
            target.innerHTML = content();
        } catch (e) {
            console.error("Kesalahan saat merender konten:", e);
        }
    },

    activityRenderOnLoad(callback) {
        if (typeof callback !== "function") {
            console.error(error_0001);
            return;
        }

        document.addEventListener("DOMContentLoaded", () => {
            try {
                callback();
            } catch (e) {
                console.error("Kesalahan saat memuat:", e);
            }
        });
    }
};

export { Metana };