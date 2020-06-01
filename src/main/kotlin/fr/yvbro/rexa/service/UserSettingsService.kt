package fr.yvbro.rexa.service

import fr.yvbro.rexa.model.UserSettings
import fr.yvbro.rexa.repository.UserSettingsRepository
import org.springframework.stereotype.Service
import java.util.*

@Service
class UserSettingsService(private val xnatRepository: UserSettingsRepository) {

    fun getXnatSettings(userId: UUID?): UserSettings {
        return xnatRepository.getSettingsByUserId(userId)
    }
}