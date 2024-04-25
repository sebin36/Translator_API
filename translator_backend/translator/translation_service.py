from googletrans import Translator

def translate_text(source_text, source_language, target_language):
    translator = Translator()
    translated = translator.translate(source_text, src=source_language, dest=target_language)
    return translated.text
